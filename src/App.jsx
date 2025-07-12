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
import { useState } from "react"

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

  const options = ["PM", "PK", "AC", "KS"]

  function renderMenuItem(id) {
    const isSelected = selected === id

    return (
      <DropdownMenuItem
        key={id}
        onSelect={() => setSelected(id)}
        className={`flex items-center gap-2 ${isSelected ? "text-pink-400 font-semibold" : ""}`}
      >
        {isSelected && (
          <span className="w-3 h-3 bg-pink-400 rounded-full inline-block" />
        )}
        {id}
      </DropdownMenuItem>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main
        className="flex-1 p-8"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          paddingTop: "40px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
         <hr style={{ width: '100%', borderColor: '#ccc', margin: '16px 0' }} />
<p>Criação, Registo e verificação  de Codigos de Artigos / Creation, Registration and Verification of Article Codes</p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <label style={{ fontWeight: "600", fontSize: "16px" }}>Tipo/Kind</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" style={{ minWidth: "120px" }}>
                {selected ?? "Selecione"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Escolha uma opção</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {options.map((opt) => renderMenuItem(opt))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

       
        {selected === "PK" ? (
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escreve aqui..."
            style={{ width: "320px", height: "120px" }}
          />
        ) : (
          <div
            style={{
              width: "320px",
              height: "120px",
              border: "1px solid #D1D5DB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9CA3AF",
              fontStyle: "italic",
            }}
          >
            {/* Espaço em branco quando não selecionado PK */}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
