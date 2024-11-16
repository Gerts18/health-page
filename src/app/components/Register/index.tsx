

import React from 'react'
import { Card, CardBody, Input, Checkbox, Button, Select, SelectItem } from "@nextui-org/react"

export default function RegistrationForm() {



    return (
        <div 
        className={`min-h-screen flex flex-col items-center justify-center p-4 gap-5 bg-cover bg-center bg-authImage`}
        >
            <div className='flex flex-col gap-5'>
                <h1 className="text-5xl font-bold text-center text-white">Registrar</h1>
                <p className="text-center text-sm text-white ">Ingrese sus datos en los campos establecidos</p>
            </div>

            <Card className="w-full max-w-md p-4">
                <CardBody className="flex flex-col gap-4">
                    <Input
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        variant="bordered"
                    />

                    <Input
                        label="Apellidos"
                        placeholder="Ingrese sus apellidos"
                        variant="bordered"
                    />

                    <Input
                        label="Correo"
                        placeholder="Ingrese su correo electrónico"
                        type="email"
                        variant="bordered"
                    />

                    <Input
                        label="Contraseña"
                        placeholder="Ingrese su contraseña"
                        type="password"
                        variant="bordered"
                    />

                    <Select
                        label="Categoría"
                        placeholder="Seleccione una categoría"
                        variant="bordered"
                    >
                        <SelectItem key="category1" value="category1">
                            Categoría 1
                        </SelectItem>
                        <SelectItem key="category2" value="category2">
                            Categoría 2
                        </SelectItem>
                    </Select>

                    <Checkbox
                     size="sm"
                     className='mb-10'
                    >Estoy de acuerdo con los términos y condiciones</Checkbox>

                    <Button className="w-full p-7 bg-button text-white font-medium " radius='sm' >
                        Registrarse
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}