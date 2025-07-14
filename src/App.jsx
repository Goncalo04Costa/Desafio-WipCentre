import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { fetchMenu, fetchPKDropdowns, fetchBrandByCustomer, fetchColorByBrand } from "./apiMocks"

function Sidebar() {
  return (
    <aside
      className="w-64 h-screen p-6 flex flex-col"
      style={{
        backgroundColor: "white",
        padding: "0px",
        borderRight: "1px solid black",
      }}
    >
      <img src="/images/wipcentre.jpg" alt="WIP Centre" className="w-48 h-auto" />
      <nav className="flex flex-col gap-4">
        <a href="#" style={{ marginLeft: '28px' }} className="hover:text-pink-400">Página 1</a>
        <a href="#" style={{ marginLeft: '28px' }} className="hover:text-pink-400">Página 2</a>
        <a href="#" style={{ marginLeft: '28px' }} className="hover:text-pink-400">Página 3</a>
      </nav>
    </aside>
  )
}

function App() {
  const [text, setText] = useState("")
  const [selected, setSelected] = useState(null)
  const [options, setOptions] = useState([])
  const [pkData, setPkData] = useState(null)

  const [customer, setCustomer] = useState("")
  const [brand, setBrand] = useState("")
  const [brands, setBrands] = useState([])
  const [colors, setColors] = useState([])

  useEffect(() => {
    fetchMenu().then((res) => {
      if (res.success) setOptions(res.data)
    })
  }, [])

  useEffect(() => {
    if (selected === "PK") {
      fetchPKDropdowns().then((res) => {
        if (res.success) setPkData(res)
      })
    } else {
      setPkData(null)
      setCustomer("")
      setCustomer("")
      setBrand("")
      setBrands([])
      setColors([])
    }
  }, [selected])

  useEffect(() => {
    if (customer) {
      fetchBrandByCustomer(customer).then((res) => {
        if (res.success) setBrands(res.data)
      })
    } else {
      setBrands([])
    }
    setBrand("")
    setColors([])
  }, [customer])

  useEffect(() => {
    if (brand) {
      fetchColorByBrand(brand).then((res) => {
        if (res.success) setColors(res.data)
      })
    } else {
      setColors([])
    }
  }, [brand])

  const renderDropdown = (label, value, setValue, options) => (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">Seleciona {label.toLowerCase()}</option>
        {options.map((opt, i) => {
          const [id, name] = Object.entries(opt)[0]
          return <option key={i} value={id}>{name}</option>
        })}
      </select>
    </div>
  )

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 flex flex-col gap-6">
        <hr className="w-full border-gray-300 my-4" />
        <p className="text-lg">
          Criação, Registo e verificação de Códigos de Artigos / Creation, Registration and Verification of Article Codes
        </p>

        {/* Dropdown tipo */}
        <div className="flex items-center gap-3">
          <label className="font-semibold text-base">Tipo/Kind</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[120px]">
                {selected ?? "Selecione"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Escolha uma opção</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {options.map((opt) => (
                <DropdownMenuItem
                  key={opt}
                  onSelect={() => setSelected(opt)}
                  className={`cursor-pointer ${selected === opt ? "text-pink-400 font-bold" : ""}`}
                >
                  {opt}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Se for PK */}
        {selected === "PK" ? (
          <div className="flex flex-col gap-4 max-w-sm">
            {renderDropdown("Cliente", customer, setCustomer, pkData?.customer || [])}
            {brands.length > 0 && renderDropdown("Marca", brand, setBrand, brands)}
            {colors.length > 0 && renderDropdown("Cor", "", () => {}, colors)}
            {renderDropdown("Certificação", "", () => {}, pkData?.certification || [])}
            {renderDropdown("Unidade", "", () => {}, pkData?.unit || [])}
            {renderDropdown("Moeda", "", () => {}, pkData?.currency || [])}
            {renderDropdown("Sustentabilidade", "", () => {}, pkData?.sustComp || [])}

            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Observações..."
              className="h-28"
            />
          </div>
        ) : (
          <div className="w-80 h-28 border border-gray-300 flex items-center justify-center text-gray-400 italic">
            Selecione o tipo "PK" para mostrar opções.
          </div>
        )}
      </main>
    </div>
  )
}

export default App
