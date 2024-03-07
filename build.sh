#!/bin/bash

# Función para manejar errores
handle_error() {
    local lineno="$1"
    local message="$2"
    echo "Error en la línea $lineno: $message"
    # Salir con un código de error
    exit 1
}

# Configurar manejo de errores
trap 'handle_error ${LINENO} "$BASH_COMMAND"' ERR

# Instalar dependencias
npm install

# Generar archivos de Prisma
echo "Generando archivos de Prisma..."
npx prisma generate || {
    echo "Error al generar archivos de Prisma."
    exit 1
}

# Aplicar migraciones de Prisma
echo "Aplicando migraciones de Prisma..."
npx prisma migrate deploy || {
    echo "Error al aplicar migraciones de Prisma."
    exit 1
}

echo "Despliegue completado con éxito."

