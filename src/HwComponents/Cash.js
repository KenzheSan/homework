function Cash(props){

    let money = props.amount
    return (
        <div className = 'cash'>
            ${money}
        </div>
    )
}

export default Cash