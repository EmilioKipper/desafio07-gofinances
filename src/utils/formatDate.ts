const formatDate = (date: Date): string => {
  const d = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(d);
};

export default formatDate;
