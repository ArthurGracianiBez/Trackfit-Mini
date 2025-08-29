interface MotivationalMessageProps {
    message: string;
    author: string;
}

export function MotivationalMessage(props: MotivationalMessageProps){
    return(
        <div style={{width: "400px", border: "2px solid black", padding: "5px 10px 2px 10px", backgroundColor:"#f4f6f9"}}>
            <h2 style={{fontWeight: "bold"}}>{props.message}</h2>
            <p style={{fontStyle: "italic", textAlign:"right"}}>{props.author}</p>
        </div>
    );
};