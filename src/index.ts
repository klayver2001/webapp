import * as XLSX from 'xlsx';

const inputElement = document.getElementById('file-input') as HTMLInputElement;
inputElement.addEventListener('change', handleFile);

function handleFile(e: Event) {
  const files = (e.target as HTMLInputElement).files;

  if (files && files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = (event.target as FileReader).result;
      const workbook = XLSX.read(data, { type: 'binary' });

      // Aqui você pode acessar os dados da planilha "CAD_CLIENTE"
      const sheetName = 'CAD_CLIENTE';
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 'A' }); // 'A' representa que o cabeçalho está na linha A

      // Agora, jsonData contém os dados da planilha "CAD_CLIENTE"
      console.log(jsonData);
    };

    reader.readAsBinaryString(file);
  }
}
