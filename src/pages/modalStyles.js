const styles = {

    modalContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(215,223,252,1) 0%, rgba(255,255,255,1) 0%, rgba(215,223,252,1) 84% )",
    },
    itemVideo:{
        width: "200px",
        height: "200px",
        backgroundColor: '#fff',
        margin: '5px',
        borderRadius: '5px',
        boxShadow: '4px 10px 9px -5px rgba(0,0,0,0.65)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
    },
    info: {
        display: "flex",
        flex: 1,
        paddingLeft: '40px',
        paddingRight: '40px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'justify'
    },
    infoTitle: {
        textAlign: 'center',
        color: '#64c832'
    },
    video: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
}


export default styles