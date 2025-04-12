function IntroOptions ({titulo,list})
{
    return(
        <div className="desIntroOptions">
            <div className="titulo-info-intro"><h4>By purchasing a {titulo}, you can customize:</h4></div>
            <ul>
            {list.map((list, index) => (
            <li key={index}>{list}</li>
                ))}
            </ul>
            </div>
    );
}

export default IntroOptions