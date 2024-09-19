let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();

console.log(companies); 

const indexOfUber = companies.indexOf("Uber");
if (indexOfUber !== -1) {
  companies[indexOfUber] = "Ola";
}

console.log(companies); 

companies.push("Amazon");

console.log(companies); 