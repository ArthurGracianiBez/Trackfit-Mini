type Exercise = {
    id: number;
    name: string;
    repeticoes: string;
};

const availableExercises: Exercise[] = [
    {id: 1, name: 'Flexão', repeticoes: '3 séries de 30'},
    {id: 2, name: 'Barra invertida', repeticoes:  '3 séries de 15'},
    {id: 3, name: 'Prancha', repeticoes: '10 séries de 10sec, com 5sec de descanso'},
];

export function ExerciseList() {
    return (
        <div>
            <h3>Lista de exercícios disponíveis:</h3>
            <ul>
                {availableExercises.map((idx) => (
                    <li key={idx.id}>
                        <strong>{idx.name}:</strong> {idx.repeticoes}
                    </li>
                ))}
            </ul>
        </div>
    )
};
