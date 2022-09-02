import {
    useQuery,
  } from '@tanstack/react-query'
  import './App.css';



function Jokes() {

    const {isLoading, error, data} = useQuery(['chukData'], () =>
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()
        )
    )

    console.log(data);


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <img src={data.icon_url} alt="logo" />
            <p>{data.value}</p>
        </>
    )
}


export default Jokes