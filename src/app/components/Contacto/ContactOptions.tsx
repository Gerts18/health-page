import Image from 'next/image'

// Tipos de propiedades para los componentes de botón, tarjeta, entrada, textarea, select y sus elementos
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' // Variantes del botón
}

type CardProps = React.HTMLAttributes<HTMLDivElement> // Propiedades para la tarjeta

type InputProps = React.InputHTMLAttributes<HTMLInputElement> // Propiedades para el input

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> // Propiedades para el textarea

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> // Propiedades para el select

type SelectTriggerProps = React.HTMLAttributes<HTMLDivElement> // Propiedades para el disparador del select

type SelectValueProps = {
  children?: React.ReactNode // Contenido del valor del select
  placeholder?: string // Placeholder para el valor del select
}

type SelectContentProps = {
  children: React.ReactNode // Contenido del select
}

type SelectItemProps = {
  children: React.ReactNode // Contenido del ítem del select
  value: string // Valor del ítem del select
}

// Componente de botón
const Button = ({ children, className, ...props }: ButtonProps) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
)

// Componente de tarjeta
const Card = ({ children, className, ...props }: CardProps) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
)

// Componente de entrada
const Input = ({ className, ...props }: InputProps) => (
  <input className={`w-full p-2 ${className}`} {...props} />
)

// Componente de textarea
const Textarea = ({ className, ...props }: TextareaProps) => (
  <textarea className={`w-full p-2 ${className}`} {...props} />
)

// Componente de checkbox
const Checkbox = ({ className, ...props }: InputProps) => (
  <input type="checkbox" className={`form-checkbox ${className}`} {...props} />
)

// Componente de select
const Select = ({ children, ...props }: SelectProps) => (
  <select className="w-full p-2" {...props}>
    {children}
  </select>
)

// Componente de disparador del select
const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => (
  <div className={`relative ${className}`} {...props}>
    {children}
  </div>
)

// Componente de valor del select
const SelectValue = ({ children, placeholder }: SelectValueProps) => (
  <span>{children || placeholder}</span>
)

// Componente de contenido del select
const SelectContent = ({ children }: SelectContentProps) => (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md">
    {children}
  </div>
)

// Componente de ítem del select
const SelectItem = ({ children, value }: SelectItemProps) => (
  <option value={value}>{children}</option>
)

// Componente principal de opciones de contacto
const ContactOptions = () => {
  // const [selectOpen] = useState(false) // Estado para controlar la apertura del select (comentado)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Columna izquierda */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#547EED]">Queremos saber tu opinión</h2>

          {/* Tarjetas de contacto */}
          <div className="space-y-4">
            {/* Tarjeta de encuesta de satisfacción */}
            <Card className="p-4 bg-[#EB356E] text-white rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Encuesta icon"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Encuesta de satisfacción</h3>
                    <p className="text-white/90 text-sm">Para FICMAC es importante conocer tu opinión sobre nuestro servicio. 
                    Cuéntanos que tal te pareció la atención recibida por parte de nuestro personal.</p>
                  </div>
                </div>
                <Button variant="secondary" className="bg-white text-[#EB356E] hover:bg-white/90">
                  Realizar
                </Button>
              </div>
            </Card>

            {/* Tarjeta de peticiones y quejas */}
            <Card className="p-4 bg-[#547EED] text-white rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Peticiones icon"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Peticiones y quejas</h3>
                    <p className="text-white/90 text-sm">Si tienes alguna solicitud, sugerencia, felicitación, queja o reclamo compártela con nosotros; 
                    nos permite mejorar para brindarte siempre el mejor servicio.</p>
                  </div>
                </div>
                <Button variant="secondary" className="bg-white text-[#547EED] hover:bg-white/90">
                  Realizar
                </Button>
              </div>
            </Card>

            {/* Tarjeta de trabajo con nosotros */}
            <Card className="p-4 bg-[#EB356E] text-white rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Trabajo icon"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Trabaja con nosotros</h3>
                    <p className="text-white/90 text-sm">En FICMAC buscamos el mejor talento y queremos que seas parte de nuestro equipo de trabajo. 
                    Cuéntanos un poco más de ti o de los servicios de tu empresa diligenciando el siguiente formulario.</p>
                  </div>
                </div>
                <Button variant="secondary" className="bg-white text-[#EB356E] hover:bg-white/90">
                  Realizar
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Columna derecha - Formulario de contacto */}
        <div className="flex justify-center items-center">
          <form className="space-y-6 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input 
                  placeholder="Nombres" 
                  className="rounded-xl border-gray-100 placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED]"
                />
              </div>
              <div>
                <Input 
                  placeholder="Apellidos" 
                  className="rounded-xl border-gray-100 placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED]"
                />
              </div>
            </div>
            <Input 
              placeholder="Correo electrónico" 
              type="email"
              className="rounded-xl border-gray-100 placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED]"
            />
            <Input 
              placeholder="Ciudad" 
              type="text"
              className="rounded-xl border-gray-100 placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED]"
            />
            <Select>
              <SelectTrigger className="w-full rounded-xl border-gray-100 bg-white placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED]">
                <SelectValue placeholder="Tipo de persona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="natural">Persona Natural</SelectItem>
                <SelectItem value="juridica">Persona Jurídica</SelectItem>
              </SelectContent>
            </Select>
            <Textarea 
              placeholder="Mensaje" 
              className="w-full h-32 rounded-xl border-gray-100 bg-white placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED] resize-none"
            />
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="privacy" 
                  className="border-gray-300 text-[#547EED] rounded focus:ring-[#547EED]" 
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-[#547EED] leading-tight hover:underline cursor-pointer"
                >
                  Autorizo la política y privacidad de datos
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button className="w-32 bg-[#EB356E] hover:bg-[#EB356E]/80 rounded-full py-3 text-base shadow-lg">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Exportar el componente ContactOptions
export default ContactOptions

  
