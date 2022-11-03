export const countdown = () => {
  const currentDate = new Date().getTime();
  const endDate = new Date("01/01/2023");
  // @ts-ignore
  const distance = endDate - currentDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return days + " " + hours + " " + minutes + " " + seconds;
};
