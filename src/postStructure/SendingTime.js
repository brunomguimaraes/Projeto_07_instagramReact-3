export default function SendingTime(props) {
    const TimeSinceSent = "6 horas"
    
    return (
        <div class="time-since-sent small-text light-gray">
            Há {props.timeSinceSent}
        </div>
    );
}