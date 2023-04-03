const months = [
   'Enero',
   'Febrero',
   'Marzo',
   'Abril',
   'Mayo',
   'Junio',
   'Julio',
   'Agosto',
   'Septiembre',
   'Octubre',
   'Noviembre',
   'Diciembre',
];

const spanishDateFormatter = (date: string | undefined) => {
   //Source Format: DD/MM/YYYY
   if (date) {
      const [day, month, fullYear] = date.split('/');
      return `${day} de ${months[Number(month) - 1]} de ${fullYear}`;
   }

   return '--'
};

export default spanishDateFormatter;
