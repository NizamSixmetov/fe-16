



function Information() {
    let userLastName = prompt('Soy adiniz?')
    let userName = prompt('Adiniz nedir?')
    return (
        <>
            <h2>Soyadiniz: {userLastName}</h2>
            <h2>Adiniz: {userName}</h2>
        </>
    )
}

export default Information