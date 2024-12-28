export default function Header(){
    return(
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                backgroundColor: "purple",
                color: "white",
                borderBottom: "3px solid #000",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderTopLeftRadius:'8px',
                borderTopRightRadius :'8px'
            }}
        >
            <img
                src="./src/meme-icon.png"
                alt="Meme Icon"
                style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                }}
            />
            <h1 style={{ fontSize: "24px", fontFamily: "Arial, sans-serif" }}>
                Meme Generator
            </h1>
        </header>

    )
}