let movies =['pulp fiction', 'fight club','treasure planet'];

const addMovie = (newMovie) => {
  movies.push(newMovie);
}

const removeFirstMovie = () => {
  setTomeout(() => {
    movies.splice(0,1);
    },1000);
};


const viewMovies = () => {
    console.log(movies);
};

removeFirstMovie()
.then (viewMovies)
.then (addMovies('help'))
.then (viewMovies)
.catch((err) => {
    console.log(err);
});
