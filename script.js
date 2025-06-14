const animals = {
    "Rat": [1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
    "Ox": [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
    "Tiger": [1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
    "Rabbit": [1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035],
    "Dragon": [1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036],
    "Snake": [1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
    "Horse": [1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038],
    "Goat": [1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039],
    "Monkey": [1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040],
    "Rooster": [1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041],
    "Dog": [1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042],
    "Pig": [1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043]
};


const button = document.getElementById("FZ-button");
    if (button)
        button.addEventListener("click", searchZodiac);

function searchZodiac() {
    const year = parseInt(document.getElementById("yearInput").value);

    for (const animal in animals) {
        document.getElementById(`${animal}-link`).style.display = "none";
    }

    for (const animal in animals) {
            if (animals[animal].includes(year)) {
                document.getElementById("result").innerHTML = `Your Zodiac Animal is a ${animal}!`;
                document.getElementById("header").style.display = "inline";
                document.getElementById(`${animal}-link`).style.display = "inline";
                return;
        }
    }
    alert("Not born yet.... or Too old... or dead.... or from the future... or not a number...");
}


/* duck helped me in fixing some of the syntax for this function,
   I didn't know the existence of
   classList or "element" and how to use them*/

   function revealInfo(element) {
    list = element
    if (list.classList.contains("hidden"))
        list.classList.remove("hidden")
            else
                list.classList.add("hidden");
}

