async function cargarLinea() {
    // Cargar archivo Excel
    const respuesta = await fetch("archivo.xlsx");
    const arrayBuffer = await respuesta.arrayBuffer();

    // Leer archivo Excel
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const hoja = workbook.Sheets[workbook.SheetNames[0]];

    // Convertir hoja a JSON
    const datos = XLSX.utils.sheet_to_json(hoja);

    // Seleccionar una fila aleatoria
    const filaAleatoria = datos[Math.floor(Math.random() * datos.length)];

    // Mostrar el resultado
    document.getElementById("resultado").textContent = JSON.stringify(filaAleatoria, null, 2);
}
