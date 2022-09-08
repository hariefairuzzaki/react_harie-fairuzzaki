function prima(bil) {
  let pembagi = 0;
  for (let i = 1; i <= bil; i++) {
    if (bil % i == 0) {
      pembagi++;
    }
  }

  const result = pembagi == 2 ? `${bil}: Bilangan Prima` : `${bil}: Bukan Bilangan Prima`;
  return console.log(result);
}

// Sample Test Cases
prima(3);
prima(7);
prima(10);
