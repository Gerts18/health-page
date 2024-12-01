'use client'

import React, { useState } from 'react'
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { UploadIcon as FileUpload, User, FileText } from 'lucide-react'
import Header from '../components/Header/Index'
import Footer from '../components/Footer/Footer'

interface FileState {
    [key: string]: File | null
}

export default function StudyRequestForm() {
    const [files, setFiles] = useState<FileState>({})

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [id]: e.target.files![0] }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
       
        console.log('Files to be uploaded:', files)

        // Como podria subirse a la base de datos:
        // const formData = new FormData()
        // Object.entries(files).forEach(([key, file]) => {
        //   if (file) formData.append(key, file)
        // })
        // await fetch('/api/upload', { method: 'POST', body: formData })
    }

    const documentSections = [
        {
            title: "Orden Médica del especialista que solicita el estudio o Formato de Solicitud de Estudios.",
            id: "medical-order"
        },
        {
            title: "Fotocopia del documento de identidad.",
            id: "identity-doc"
        },
        {
            title: "Consentimiento Informado de FICMAC (firmado por el paciente, acudiente del paciente o médico tratante).",
            id: "consent"
        },
        {
            title: "Voucher o Bono si fue emitido por su médico tratante.",
            id: "voucher"
        },
        {
            title: "Resumen de Historia Clínica.",
            id: "clinical-history"
        }
    ]

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen flex flex-col items-center px-2 mb-0 pt-16">
                <div className="max-w-4xl mx-auto p-6 mt-9">
                    <div className="mb-8">
                        <div className="mb-8">

                            <h2 className="text-3xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">
                                Solicitud de estudio
                            </h2>
                        </div>
                    </div>

                    {/* Progress Icons */}
                    {/*  <div className="flex justify-center mb-12 gap-16">
                        <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">Datos del paciente</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">Tipos de Biopsia</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                            <FileUpload className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">Documentos</span>
                        </div>
                    </div> */}

                    <div className="flex justify-center space-x-4 items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
                        <span className="w-12 border-t border-blue-600"></span>
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
                        <span className="w-12 border-t border-blue-600"></span>
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">3</div>
                    </div>

                    <br />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {documentSections.map((section) => (
                            <div key={section.id} className="border-b pb-6">
                                <p className="text-gray-600 mb-4">{section.title}</p>
                                <Card className="bg-white">
                                    <CardBody className="p-4">
                                        <div className="text-sm text-gray-500 mb-1">firmado y sellado</div>
                                        <div className="text-sm text-gray-500 mb-2">medico | Tamaño maximo 3MB</div>
                                        <input
                                            type="file"
                                            id={section.id}
                                            onChange={(e) => handleFileChange(e, section.id)}
                                            className="hidden"
                                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                        />
                                        <label htmlFor={section.id}>
                                            <Button
                                                color="primary"
                                                className="bg-blue-500"
                                                size="sm"
                                                as="span"
                                            >
                                                {files[section.id] ? 'Archivo seleccionado' : 'Subir archivo'}
                                            </Button>
                                        </label>
                                        {files[section.id] && (
                                            <p className="mt-2 text-sm text-gray-600">
                                                Archivo: {files[section.id]?.name}
                                            </p>
                                        )}
                                    </CardBody>
                                </Card>
                            </div>
                        ))}

                        <div className="flex justify-end pt-4">
                            <Button
                                color="danger"
                                size="lg"
                                className="px-12 bg-pink-500"
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

