import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
     <a
  href="#"
  style={{ marginLeft: '28px', color: 'var(--color-gray-500)' }}
  className="hover:text-pink-400"
>
  Criar Artigos
</a>
<a
  href="#"
  style={{ marginLeft: '28px', color: 'var(--color-gray-500)' }}
  className="hover:text-pink-400"
>
  Backlog
</a>
<a
  href="#"
  style={{ marginLeft: '28px', color: 'var(--color-gray-500)' }}
  className="hover:text-pink-400"
>
  RoadMap
</a>
<a href="#"style={{ marginLeft: '28px', color: 'var(--color-gray-500)' }}
className="hover:text-pink-400"
>
  Reports
</a>
<hr className="w-full border-gray-300 my-4" />
<a
  href="#"
  style={{ marginLeft: '28px', color: 'var(--color-gray-500)' }}
  className="hover:text-pink-400"
>
  Teams
</a>
<a
  href="#"
  style={{ marginLeft: '28px', color: 'var(--color-gray-500)' }}
  className="hover:text-pink-400"
>
  Project Settings
</a>
      </nav>
    </aside>
  )
}

function App() {
  const [text, setText] = useState("")
  const [selected, setSelected] = useState(null)
  const [options, setOptions] = useState([])
  const [pkData, setPkData] = useState(null)

  // Campos PK
  const [customer, setCustomer] = useState("")
  const [brand, setBrand] = useState("")
  const [brands, setBrands] = useState([])
  const [colors, setColors] = useState([])
  const [color, setColor] = useState("")

  const [pares, setPares] = useState("")
  const [tamanho, setTamanho] = useState("")
  const [certification, setCertification] = useState("")
  const [unit, setUnit] = useState("")
  const [currency, setCurrency] = useState("")
  const [sustComp, setSustComp] = useState("")

  const [codigo, setCodigo] = useState("")

  const [descricao, setDescricao] = useState("")

  const [comprimento, setComprimento] = useState("")
  const [largura, setLargura] = useState("")
  const [altura, setAltura] = useState("")

  const [precoUnitario, setPrecoUnitario] = useState("")
const [total, setTotal] = useState("")

const [peso, setPeso] = useState("")
const [pesobox, setPesobox] = useState("")

const [referenciaCliente, setReferenciaCliente] = useState("")
const [csStyleRef, setCsStyleRef] = useState("")
const [barcode, setBarcode] = useState("")
const [packsCx, setPacksCx] = useState("")
const [coeficienteCx, setCoeficienteCx] = useState("")


  useEffect(() => {
    fetchMenu().then((res) => {
      if (res.success) setOptions(res.data)
    })
  }, [])

useEffect(() => {
  const p = parseFloat(pares)
  const preco = parseFloat(precoUnitario)

  if (!isNaN(p) && !isNaN(preco)) {
    setTotal((p * preco).toFixed(2))
  } else {
    setTotal("")
  }
}, [pares, precoUnitario])




  useEffect(() => {
    if (selected === "PK") {
      fetchPKDropdowns().then((res) => {
        if (res.success) setPkData(res)
      })
    } else {
      setPkData(null)
      setCustomer("")
      setBrand("")
      setBrands([])
      setColors([])
      setColor("")
      setPares("")
      setTamanho("")
      setCertification("")
      setUnit("")
      setCurrency("")
      setSustComp("")
      setCodigo("")
      setDescricao("")
      setPeso("")
      setPesobox("")
      setComprimento("")
      setLargura("")  
      setAltura("")
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
    setColor("")
  }, [customer])

  useEffect(() => {
    if (brand) {
      fetchColorByBrand(brand).then((res) => {
        if (res.success) setColors(res.data)
      })
    } else {
      setColors([])
    }
    setColor("")
  }, [brand])

  const renderDropdown = (label, value, setValue, options) => (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">Selecione {label.toLowerCase()}</option>
        {options.map((opt, i) => {
          const [id, name] = Object.entries(opt)[0]
          return <option key={i} value={id}>{name}</option>
        })}
      </select>
    </div>
  )

  const handleVerify = () => {
    // Exemplo: PK<Pares><Cliente><Marca><Cor><Tamanho><Certificacao>
    const code = `PK${pares}${customer}${brand}${color}${tamanho}${certification}`
    setCodigo(code)
  }

const handleSave = () => {
  if (!codigo) {
    alert("Por favor, verifique o código antes de guardar.");
    return;
  }

  // Lista dos campos obrigatórios
  const obrigatorios = [
    { label: "Tipo", value: selected },
    { label: "Pares", value: pares },
    { label: "Cliente", value: customer },
    { label: "Marca", value: brand },
    { label: "Cor", value: color },
    { label: "Tamanho", value: tamanho },
    { label: "Certificação", value: certification },
    { label: "Unidade", value: unit },
    { label: "Moeda", value: currency },
    { label: "Sustentabilidade", value: sustComp },
    { label: "Total", value: total },
    { label: "Peso", value: peso },
    { label: "Peso CX/Box", value: pesobox },
    { label: "Packs p/cx", value: packsCx },
    { label: "Coeficiente p/Cx", value: coeficienteCx },
    { label: "Comprimento", value: comprimento },
    { label: "Largura", value: largura },
    { label: "Altura", value: altura }
  ];

  // Checar se algum campo obrigatório está vazio
  for (const campo of obrigatorios) {
    if (!campo.value || campo.value === "") {
      alert(`O campo "${campo.label}" é obrigatório.`);
      return;
    }
  }

  // Checar limite de pares
  if (Number(pares) > 999) {
    alert("O número máximo de pares permitido é 999.");
    return;
  }

  // Checar se valores numéricos não são negativos
  const camposNumericos = [
    { label: "Peso", value: peso },
    { label: "Peso CX/Box", value: pesobox },
    { label: "Comprimento", value: comprimento },
    { label: "Largura", value: largura },
    { label: "Altura", value: altura }
  ];

  for (const campo of camposNumericos) {
    if (Number(campo.value) < 0) {
      alert(`O campo "${campo.label}" não pode ser negativo.`);
      return;
    }
  }

  // Agora monta o objeto produto e segue o save normalmente
  const produto = {
    tipo: selected,
    pares,
    cliente: customer,
    marca: brand,
    cor: color,
    tamanho,
    certificacao: certification,
    unidade: unit,
    moeda: currency,
    sustentabilidade: sustComp,
    codigo,
    total,
    descricao,
    peso,
    pesobox,
    referenciaCliente,
    csStyleRef,
    barcode,
    packsCx,
    coeficienteCx,

    medidas: {
      comprimento,
      largura,
      altura
    }
  };

  // Resto do código para salvar e limpar campos...
  localStorage.setItem("produtoSalvo", JSON.stringify(produto));
  alert("Produto guardado com sucesso!");
  console.log("Produto guardado:", produto);

  const blob = new Blob([JSON.stringify(produto, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${codigo}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  // Limpar todos os campos
  setCodigo("");
  setPares("");
  setCustomer("");
  setBrand("");
  setColor("");
  setTamanho("");
  setCertification("");
  setUnit("");
  setCurrency("");
  setSustComp("");
  setDescricao("");
  setPeso("");
  setPesobox("");
  setComprimento("");
  setLargura("");
  setAltura("");
  setPrecoUnitario("");
  setTotal("");
  setReferenciaCliente("");
  setCsStyleRef("");
  setBarcode("");
  setPacksCx("");
  setCoeficienteCx("");
};



  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 flex flex-col gap-6">
        <hr className="w-full border-gray-300 my-4" />
        <p className="text-lg">
          Criação, Registo e Verificação de Códigos de Artigos
        </p>

        {/* Dropdown tipo */}
        <div className="flex items-center gap-3">
          <label className="font-semibold text-base">Tipo</label>
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
        {selected === "PK" && (
      <div
  className="gap-4 max-w-sm"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
  }}
>
            {renderDropdown("Cliente", customer, setCustomer, pkData?.customer || [])}
            {brands.length > 0 && renderDropdown("Marca", brand, setBrand, brands)}
            {colors.length > 0 && renderDropdown("Cor", color, setColor, colors)}

          {/* Pares - input número com limite */}
<div className="flex flex-col gap-1">
  <label className="font-medium">Pares</label>
  <input
    type="number"
    value={pares}
    onChange={(e) => {
      const val = Number(e.target.value)
      if (val >= 1 && val <= 999) {
        setPares(e.target.value)
      } else if (e.target.value === "") {
        setPares("") 
      }
    }}
    className="border px-2 py-1 rounded"
    placeholder="Introduza pares"
    min={1}
    max={999}
  />
</div>


            {/* Tamanho - input texto */}
            <div className="flex flex-col gap-1">
              <label className="font-medium">Tamanho</label>
              <input
                type="text"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
                className="border px-2 py-1 rounded"
                placeholder="Introduza tamanho"
              />
            </div>
            <div className="flex flex-col gap-1">
  <label className="font-medium">Preço Unitário</label>
  <input
    type="number"
    step="0.01"
    value={precoUnitario}
    onChange={(e) => setPrecoUnitario(e.target.value)}
    className="border px-2 py-1 rounded"
    placeholder="Introduza preço unitário"
    
  />
</div>

<div className="flex flex-col gap-1">
  <label className="font-medium">Total</label>
  <input
    type="text"
    value={total}
    readOnly
    className="border px-2 py-1 rounded bg-gray-100"
    placeholder="Total calculado"
  />
</div>
{/* Referência de Cliente */}
<div className="flex flex-col gap-1">
  <label className="font-medium">Referência de Cliente</label>
  <input
    type="text"
    value={referenciaCliente}
    onChange={(e) => setReferenciaCliente(e.target.value)}
    className="border px-2 py-1 rounded"
    placeholder="Introduza a referência de cliente"
  />
</div>

{/* CS Style Ref */}
<div className="flex flex-col gap-1">
  <label className="font-medium">CS Style Ref</label>
  <input
    type="text"
    value={csStyleRef}
    onChange={(e) => setCsStyleRef(e.target.value)}
    className="border px-2 py-1 rounded"
    placeholder="Introduza o CS Style Ref"
  />
</div>

{/* Customer Barcode EAN13 */}
<div className="flex flex-col gap-1">
  <label className="font-medium">Customer Barcode EAN13</label>
  <input
    type="text"
    value={barcode}
    onChange={(e) => setBarcode(e.target.value)}
    className="border px-2 py-1 rounded"
    placeholder="Introduza o código de barras"
  />
</div>

{/* Packs p/cx */}
<div className="flex flex-col gap-1">
  <label className="font-medium">Packs p/cx</label>
  <input
    type="number"
    value={packsCx}
    onChange={(e) => setPacksCx(e.target.value)}
    className="border px-2 py-1 rounded"
    placeholder="Quantos packs por caixa"
     min={1}
    max={999}
  />
</div>

{/* Coeficiente p/Cx */}
<div className="flex flex-col gap-1">
  <label className="font-medium">Coeficiente p/Cx</label>
  <input
    type="number"
    step="0.01"
    value={coeficienteCx}
    onChange={(e) => setCoeficienteCx(e.target.value)}
    className="border px-2 py-1 rounded"
    placeholder="Coeficiente por caixa"
     min={1}
    max={999}
  />
</div>


            {renderDropdown("Certificação", certification, setCertification, pkData?.certification || [])}
            {renderDropdown("Unidade", unit, setUnit, pkData?.unit || [])}
            {renderDropdown("Moeda", currency, setCurrency, pkData?.currency || [])}
            {renderDropdown("Sustentabilidade", sustComp, setSustComp, pkData?.sustComp || [])}
<div className="flex flex-col gap-1">
  <label className="font-medium">Descrição</label>
  <textarea
    value={descricao}
    onChange={(e) => setDescricao(e.target.value)}
    className="border px-2 py-1 rounded resize-y min-h-[80px]"
    placeholder="Introduza uma descrição do produto"
  />
</div>
<div className="flex flex-col gap-1">
  <label className="font-medium">Medidas da caixa (C x L x A)</label>
  <div className="flex items-center gap-2">
    <input
      type="number"
      value={comprimento}
      onChange={(e) => setComprimento(e.target.value)}
      placeholder="Compr."
      className="border px-2 py-1 rounded w-20"
       min={1}
    max={999}
    />
    <span className="text-gray-500">x</span>
    <input
      type="number"
      value={largura}
      onChange={(e) => setLargura(e.target.value)}
      placeholder="Larg."
      className="border px-2 py-1 rounded w-20"
       min={1}
    max={999}
    />
    <span className="text-gray-500">x</span>
    <div className="flex items-center gap-1">
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Alt."
        className="border px-2 py-1 rounded w-20"
         min={1}
    max={999}
      />
      <span className="text-gray-500">cm</span>
    </div>
  </div>
</div>
<div className="flex flex-col gap-1">
  <label className="font-medium">Peso/Weight PK</label>
  <div className="flex items-center gap-2">
    <input
      type="number"
      min={0}
      step={1}
      value={peso}
      onChange={(e) => setPeso(e.target.value)}
      placeholder="Peso"
      className="border px-2 py-1 rounded w-24"
      
    />
    <span className="text-gray-500">Gr</span>
  </div>
</div>
<div className="flex flex-col gap-1">
  <label className="font-medium">Peso CX/Box Weight</label>
  <div className="flex items-center gap-2">
    <input
      type="number"
      min={0}
      step={1}
      value={pesobox}
      onChange={(e) => setPesobox(e.target.value)}
      placeholder="Peso"
      className="border px-2 py-1 rounded w-24"
    />
    <span className="text-gray-500">Kg</span>
  </div>
</div>



            <div className="flex gap-2 mt-2">
              <Button onClick={handleVerify} variant="secondary">
                Verificar
              </Button>
              <Button onClick={handleSave} variant="primary">
                Guardar
              </Button>
            </div>

            <div className="mt-4">
              <label className="font-medium">Código Gerado</label>
              <input
                type="text"
                value={codigo}
                readOnly
                className="w-full border px-2 py-1 rounded"
                placeholder=""
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
