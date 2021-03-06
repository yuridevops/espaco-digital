const styles = {

    modalContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(215,223,252,1) 0%, rgba(255,255,255,1) 0%, rgba(215,223,252,1) 84% )",
    },
    itemVideo: {
        width: "200px",
        height: "200px",
        backgroundColor: '#fff',
        marginRight: '50px',
        marginLeft: '50px',
        marginTop: '10px',
        borderRadius: '5px',
        boxShadow: '0px 0px 21px 3px rgba(0,0,0,0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    faceStream: {
        display: "flex",
        flex: 1,
        height: '100%',
        width: '100%'
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
    infoSmall: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        margin: '10px 20px',
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
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ul:{
        fontSize: '30',
        listStyle: 'none',
        marginTop: '30px'
        
    }
}


export default styles