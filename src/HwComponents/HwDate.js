
function HwDate(props) {
    let month = props.date.toLocaleString('en-US', { month: 'long' });
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    let year = props.date.getFullYear();
    return (
        <div className = 'allDate'>
            <span>{month}/</span>
            <span>{day}/</span>
            <span>{year}</span>
        </div>
    )
}
export default HwDate;