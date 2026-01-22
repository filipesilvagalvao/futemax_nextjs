export const slugify = (text:string)=> {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")                 // separa acentos
    .replace(/[\u0300-\u036f]/g, "")  // remove acentos
    .replace(/[^a-z0-9\s-]/g, "")     // remove caracteres especiais
    .trim()                           // remove espaços extras
    .replace(/\s+/g, "-")             // troca espaços por hífen
    .replace(/-+/g, "-");             // remove hífens duplicados
}
