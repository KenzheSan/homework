import './Component.css'
import HwDate from './HwDate'
import Cash from './Cash'
function Homework(props) {

let hlDate = props.date
let hwTitle = props.title
let hwAmount = props.amount

    return (
        <div className = 'mainBlog'>
            <div className = 'date'>
                <HwDate date = {hlDate}/>
                 <h1 className = 'title'>
                    {hwTitle}
                 </h1>
            </div>
            <Cash amount = {hwAmount}/>
        </div>
    )
}

export default Homework;