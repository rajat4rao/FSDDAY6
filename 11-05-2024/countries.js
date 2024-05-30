
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countriesdata => {
    

    const countriesAsia = countriesdata.filter(country => country.region === 'Asia');
    console.log("Countries from Asia:");
    console.log(countriesAsia.map(country => country.name.common));


    const populationLess2lacs = countriesdata.filter(country => country.population < 200000);
    console.log("Countries with a population of less than 2 lakhs:");
    console.log(populationLess2lacs.map(country => country.name.common));


    console.log("Country Details:");
    countriesdata.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
    });


    const totalPopulation = countriesdata.reduce((total, country) => total + country.population, 0);
    console.log("Total Population:", totalPopulation);


    const countriesUsingDollars = countriesdata.filter(country => 
      country.currencies && Object.keys(country.currencies).includes('USD')
    );
    console.log("Countries using US Dollars:");
    countriesUsingDollars.forEach(country => {
      console.log(country.name.common);
    });

  })
  .catch(error => console.error('Error', error));
