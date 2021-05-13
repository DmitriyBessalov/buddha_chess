const get = (function() {
        let a = window.location.search, b = {}
        a = a.substring(1).split("&")
        for (let i = 0; i < a.length; i++){let c=a[i].split("=")
            b[c[0]]=c[1]
        }
        return b
})()

let PGN, board_scale, board_size
const board = document.querySelector(`#board`)
const board_path_top = document.querySelector(`#board_path_top`)
const board_path_bottom = document.querySelector(`#board_path_bottom`)
const board_style = document.querySelector(`#board_style`)
let mouse_position_dragstart = {}
let mouse_position_dragover = {}
let mouse_position_old_dragover = {}
let mouse_position_dragend = {}
let board_position_top
let board_rotate=""


if (get['pgn']){
    PGN = get['pgn']
}else{
    PGN = 'classic'
}

if (PGN === 'classic')
    FEN = chess960[518]

if (PGN === '960'){
    _start = Math.floor(Math.random() * 960)
    console.log('position 960:' , _start)
    FEN = chess960[_start]
}


if (PGN === 'v1')
    FEN = "rbnKPnqr/pppbpppp/8/8/8/8/PPPBPPPP/RBNkpNQR w - - 0 1"

if (PGN === 'v2')
    FEN = "rpnqknpr/pppbbppp/8/8/8/8/PPPBBPPP/RPNQKNPR w - - 0 1"

if (PGN === 'v3')
    FEN = "rqpKPbnr/pppbnppp/8/8/8/8/PPPBNPPP/RQPkpBNR w - - 0 1"

if (PGN === 'v4'){
    FEN = "tcrqhKPbnrag/pppppbnppppp/12/12/12/12/12/12/12/12/PPPPPBNPPPPP/TCRQHkpBNRAG w - - 0 1"
}

let create_piece = (_x, _y, code_piece) => {
    let div = document.createElement('div')
    div.classList='piece_rotate'
    let piece = document.createElement('piece')
    switch(code_piece){
        case 'p': piece.setAttribute( "class", "black pawn");break
        case 'P': piece.setAttribute( "class", "white pawn");break
        case 'r': piece.setAttribute( "class", "black rook");break
        case 'R': piece.setAttribute( "class", "white rook");break
        case 'n': piece.setAttribute( "class", "black knight");break
        case 'N': piece.setAttribute( "class", "white knight");break
        case 'b': piece.setAttribute( "class", "black bishop");break
        case 'B': piece.setAttribute( "class", "white bishop");break
        case 'q': piece.setAttribute( "class", "black queen");break
        case 'Q': piece.setAttribute( "class", "white queen");break
        case 'k': piece.setAttribute( "class", "black king");break
        case 'K': piece.setAttribute( "class", "white king");break
        case 'h': piece.setAttribute( "class", "black h-pawn");break
        case 'H': piece.setAttribute( "class", "white h-pawn");break
        case 'a': piece.setAttribute( "class", "black archbishop");break
        case 'A': piece.setAttribute( "class", "white archbishop");break
        case 'g': piece.setAttribute( "class", "black pegasus");break
        case 'G': piece.setAttribute( "class", "white pegasus");break
        case 't': piece.setAttribute( "class", "black centaur");break
        case 'T': piece.setAttribute( "class", "white centaur");break
        case 'c': piece.setAttribute( "class", "black chancellor");break
        case 'C': piece.setAttribute( "class", "white chancellor")
    }
    piece.id = 'piece_'+_x+'_'+_y
    div.appendChild(piece)
    div.draggable = true
    set_piece_position(div, _x, _y)
}

let set_piece_position = (piece, _x, _y, old_x, old_y, time_animation=0,) => {
    console.log(_x, _y, old_x, old_y, piece)

    if (position_board_path(_y) === "top") {
        piece.setAttribute("style", "transform: translate(" + _x * 60 + "px, " + _y * 60 + "px);transition: " + time_animation + "s;")
        board_path_top.appendChild(piece)
    } else {
        piece.setAttribute("style", "transform: translate(" + _x * 60 + "px, " + (_y - 6) * 60 + "px);transition: " + time_animation + "s;")
        board_path_bottom.appendChild(piece)
    }
}

let generate_start_position = () => {
    let line = FEN.split(" ")[0].split("/")
    line.forEach((value, key) => {
        let parallax_X = 0, parallax_Y = 0, i = 0, x = 0
        if (PGN !== 'v4') {
            parallax_X = 2
            if (key > 3) {
                parallax_Y = 4
            }
        }
        for(;x<12;i++){
            if (value[i] && (Number.isNaN(parseInt(value[i], 10)))) {
                create_piece(x + parallax_X, key + parallax_Y, value[i])
                x++
            } else {
                x = x + Number(value[i])
            }
        }
    })
}

let mouse_position = (evt) => {
    let mouse_pos = {}
    mouse_pos['x'] = (Math.ceil(evt.layerX/(60*board_scale)))-1
    mouse_pos['y'] = Math.ceil((evt.y-board_position_top)/(60*board_scale))-1

    if(board_rotate){
        mouse_pos.x=board_size-mouse_pos['x']-1
        mouse_pos.y=board_size-mouse_pos['y']-1
    }

    return mouse_pos
}

let position_board_path = (mouse_pos_y) => {
    if (board_size/2<=mouse_pos_y){
        return 'bottom'
    }else{
        return 'top'
    }
}


coordinate_shift=(position)=>{
    position['shift_x']=position.x
    position['shift_y']=position.y
    if (board_size!==12){
        position['shift_x'] = position.x + 2
        if (position_board_path(position.y)==='bottom'){
            if (board_size===8){
                position['shift_y']=position.y+4
            }else{
                position['shift_y']=position.y+2
            }
        }
    }


    return position
}

chess_move=(piece, _mouse_position_dragend, _mouse_position_dragstart)=>{
    console.log('Проверка хода')
    set_piece_position(piece, _mouse_position_dragend.shift_x, _mouse_position_dragend.shift_y, _mouse_position_dragstart.shift_x, _mouse_position_dragstart.shift_y, 1.5)
}


let rotate = () => {
    if (!board_rotate){
        board_rotate="-"
    }else{
        board_rotate=""
    }
    switch(board_size) {
        case 8:size1(0);break
        case 10:size2(0);break
        case 12:size3(0);
    }
}

board.addEventListener(`dragstart`, (evt) => {
    board_position_top = board.getBoundingClientRect().top
    mouse_position_dragstart = coordinate_shift(mouse_position(evt))
})

board.addEventListener(`dragover`, (evt) => {
    mouse_position_dragover = mouse_position(evt)
    if (mouse_position_old_dragover.x !== mouse_position_dragover.x || mouse_position_old_dragover.y !== mouse_position_dragover.y){
        mouse_position_old_dragover = mouse_position_dragover
        //console.log('mouseover', mouse_position_dragover)
    }
    //console.log('mousemove', evt.layerX, evt.layerY,)
})

board.addEventListener(`dragend`, (evt) => {
    mouse_position_dragend = coordinate_shift(mouse_position(evt))
    chess_move(evt.target, mouse_position_dragend, mouse_position_dragstart)
    evt.target.classList.remove(`dragover`)
})


let size0 = (time=2) => {
    board_scale = 1.5
    board_size = 8
    let _style
    if  (PGN !== 'v4') {
        if (!board_rotate) {
            _style = "" +
                "coords.collum {" +
                    "flex-flow: column-reverse;" +
                    "transform: translate( 539px, -2px);" +
                "}" +
                "coords.row {" +
                    "transform: translate( 122px, 341px);" +
                "}" +
                "coord.a {" +
                    "color: #86a666;" +
                "}"
        } else {
            _style = "" +
                "div#board_path_top>coords.collum {" +
                    "flex-flow: column;" +
                    "transform: translate( 122px, -238px) scale(-1);" +
                "}" +
                "div#board_path_bottom>coords.collum {" +
                    "flex-flow: column;" +
                    "transform: translate( 122px, 2px) scale(-1);" +
                "}" +
                "coords.row {" +
                    "transform: translate( 118px, -41px) scale(-1);" +
                    "flex-flow: row-reverse;" +
                "}" +
                "piece{" +
                    "transform: scale(-1);" +
                "}" +
                "coord.b {" +
                    "color: #86a666;" +
                "}"
        }
    }else{
        if (!board_rotate) {
            _style = "" +
                "coords.collum {" +
                    "transition: " + time + "s;" +
                    "flex-flow: column-reverse;" +
                    "transform: translate( 539px, -2px);" +
                "}" +
                "div#board_path_top>coords.row {" +
                    "display:none;" +
                "}"+
                "div#board_path_bottom>coords.row {" +
                    "transform: translate( 2px, 341px);" +
                "}" +
                "coord.a {" +
                    "color: #86a666;" +
                "}"
        } else {
            _style = "" +
                "coords.collum {" +
                    "transition: " + time + "s;" +
                    "flex-flow: column;" +
                    "transform: translate( 122px, 2px) scale(-1);" +
                "}" +
                "div#board_path_top>coords.row {" +
                    "transform: translate( -2px, -41px) scale(-1);" +
                    "flex-flow: row-reverse;" +
                "}" +
                "piece{" +
                    "transform: scale(-1);" +
                "}" +
                "coord.b {" +
                    "color: #86a666;" +
                "}"
        }
    }

    board_style.innerHTML = "" +
        "#board{" +
        "transition: " + time + "s;" +
        "height: 480px; width: 480px;" +
        "transform: translate( 120px,  120px) scale(" + board_rotate + board_scale + ")" +
        "}" +
        "#board_path_top{" +
            "transition: " + time + "s;" +
            "transform: translate( -120px, 0px)" +
        "}"+
        "#board_path_bottom{" +
            "transition: " + time + "s;" +
            "transform: translate( -120px, -120px)" +
        "}"+ _style
}

let size1 = (time) => {
    size0(time)
}

let size2 = (time) => {
    board_scale = 1.2
    board_size = 10
    let _style
    if (!board_rotate) {
        _style = "" +
            "coords.collum {" +
                "transition: " + time + "s;" +
                "flex-flow: column-reverse;" +
                "transform: translate( 659px, -1px);" +
            "}" +
            "div#board_path_top>coords.row {" +
                "display: none;" +
            "}" +
            "div#board_path_bottom>coords.row {" +
                "transform: translate( 2px, 341px);" +
            "}" +
            "coord.a {" +
                "color: #86a666;" +
            "}"
    } else {
        _style = "" +
            "coords.collum {" +
                "transition: " + time + "s;" +
                "flex-flow: column;" +
                "transform: translate( 123px, 1px) scale(-1);" +
            "}" +
            "div#board_path_top>coords.row {" +
                "transform: translate( -2px, -41px) scale(-1);" +
                "flex-flow: row-reverse;" +
            "}" +
            "div#board_path_bottom>coords.row {" +
                "display: none;" +
            "}" +
            "piece{" +
                "transform: scale(-1);" +
            "}" +
            "coord.b {" +
                "color: #86a666;" +
            "}"
    }
    board_style.innerHTML= "" +
        "#board{" +
            "transition: " + time + "s;" +
            "height: 600px; width: 600px;" +
            "transform: translate( 60px, 60px) scale(" + board_rotate + board_scale + ")" +
        "}" +
        "#board_path_top{" +
            "transition: " + time + "s;" +
            "transform: translate( -120px, 0px)" +
        "}"+
        "#board_path_bottom{" +
            "transition: " + time + "s;" +
            "transform: translate( -120px, -60px)" +
        "}"+ _style
}

let size3 = (time) => {
    board_scale = 1
    board_size = 12
    let _style
    if (!board_rotate) {
        _style = "" +
            "coords.collum {" +
                "transition: " + time + "s;" +
                "flex-flow: column-reverse;" +
                "transform: translate( 659px, -1px);" +
            "}" +
            "div#board_path_top>coords.row {" +
                "display: none;" +
            "}" +
            "div#board_path_bottom>coords.row {" +
                "transform: translate( 2px, 341px);" +
            "}" +
            "coord.a {" +
                "color: #86a666;" +
            "}"
    } else {
        _style = "" +
            "coords.collum {" +
                "transition: " + time + "s;" +
                "flex-flow: column;" +
                "transform: translate( 3px, 1px) scale(-1);" +
            "}" +
            "div#board_path_top>coords.row {" +
                "transform: translate( -2px, -41px) scale(-1);" +
                "flex-flow: row-reverse;" +
            "}" +
            "div#board_path_bottom>coords.row {" +
                "display: none;" +
            "}" +
            "piece{" +
                "transform: scale(-1);" +
            "}" +
            "coord.b {" +
                "color: #86a666;" +
            "}"
    }


    board_style.innerHTML= "" +
        "#board{" +
            "transition: " + time + "s;" +
            "height: 720px;width: 720px;" +
            "transform: scale(" + board_rotate + board_scale + ")" +
        "}" +
        "#board_path_top{" +
            "transition: " + time + "s;" +
            "transform: translate( 0px, 0px)"+
        "}"+
        "#board_path_bottom{" +
            "transition: " + time + "s;" +
            "transform: translate( 0px, 0px)" +
        "}" + _style
}

if  (PGN === 'v4') {
    size3(0)
    generate_start_position()


    setTimeout(size0, 2000);

}else{
    size0(0)
    generate_start_position()
}
