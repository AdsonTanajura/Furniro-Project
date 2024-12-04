function formatPath(pathname: string): string {
  return pathname
    .slice(1) // Remove a primeira barra
    .split('/') // Divide em partes baseadas na barra
    .map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1) // Capitaliza a primeira letra de cada parte
    )
    .join(' > '); // Junta com ' > '
}

export default formatPath;
