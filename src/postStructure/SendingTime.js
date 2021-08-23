export default function SendingTime(props) {
    return (
        <div class="time-since-sent small-text light-gray">
            Há {props.timeSinceSent}
        </div>
    );
}