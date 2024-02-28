
export const Cuadro = ({ valor, handleBoton }) => {

    // const handleBoton = (event) => {
    //     console.log(event)
    //     event.target
    // }

    return (
        <button onClick={handleBoton}>{ valor }</button>
    )
}