const get = (function() {
        let a = window.location.search, b = {}
        a = a.substring(1).split("&")
        for (let i = 0; i < a.length; i++){let c=a[i].split("=")
            b[c[0]]=c[1]
        }
        return b
})()

let PGN, board_scale, board_size, board_position
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
let moves

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


if (PGN === 'v1'){
    FEN = "rbnKPnqr/pppbpppp/8/8/8/8/PPPBPPPP/RBNkpNQR w - - 0 1"
    moves = "f2f3a7a5g1f2b8a7e2e3b7b6c2c3e7e5f1g3b6b5c1d3f7f6b2b4a5b4d3b4a7c5d8c7с5b4c3b4d7e6c7b7а8а2а1а2е6а2b1a2g8a2b7c8d1c2g3e4f6f5е4с5а2с4е3е4с4в4f2e3b4d2е3d2е1d2с8с7d2a5c7d6f8g6е8e6h8d8c5d7а5а6d6c5d8c8c5d5g6f4d5e5f4e6e5f5e6d4f5f4а6d6f4e3с8с3е3f2d6d7h1e1b5b4e4e5d7f5e5e6d4e6е1е2с2d3е2е3d3c4е3е4с4b3е4е1f5c5f2f1с3е3е1в1в3а2в1d1с5с4f1f2с4e2f2g3е2d1h2h3g7g5g3g4h7h6h3h4d1d4g4g3d4h4"
}

if (PGN === 'v2'){
    FEN = "rhnqknhr/pppbbppp/8/8/8/8/PPPBBPPP/RHNQKNHR w - - 0 1"
    moves = "h2h4h7h5f1g3g7g6b2b4c7c5c1d3f8e6a2a4b7b5b1b3c5c4b3c4b5c4d3f4e6f4d2f4e7b4c2c3b4a5f4g5d8e6e2c4e6c5d1b2g8g7g5d2c8d6c4e2f7f5f2f400g3f1b8b6f1e3a7a6g2g3c5e6g1g2b6b5a4b5a6b5b2d3f8c8e3c2d6c400c4d2d3d2a5c3d2b3c3a1c2a1c8b8a1c2a8a4f1a1a4a1c2a1b5b4a1c2d7b5e2b5b8b5c2b4e6d6b3a4b5b8a4a5b8a8a5b6a8a1g1f2a1b1b6a5d6c5b4a6c5d3f2f3d3d2f3f2b1e1g3g4d2e2"
}

if (PGN === 'v3'){
    FEN = "rqpKPbnr/pppbnppp/8/8/8/8/PPPBNPPP/RQPkpBNR w - - 0 1"
    moves = "h2h3b7b6g2g4d7b5a2a4b5c6b2b4f7f5e2g3g7g6c2c4a7a6b4b5a6b5c4b5c6d7g4f5g6f5h3h4e7g6f1h3f5f4g3h5c7c6b5c6d7c6h3c8a8a4a1a4c6a4h5f4a4c2b1a2g8e1c8h3g6h4a2b4e7g6b4b5f8c5f4e6c2d3b5a4b8a7e6c5b6c5a4c5d3b5c5d6d1c2f2f4h8f8f4f5g6h8d2g5h4f5h3f5c2b3h1h7a7b6d6e7f8f5e7f5b3c4h7h8b5d7f5f6d7a4h8h7c4c5g1e2b6b5g5d2c5d6h7b7b5c5d2b4d6c6b4c5c6b7e2c3a4c5f6e6b7a6e6c7a6a5c7b6"
}

if (PGN === 'v4'){
    FEN = "tcrqhKPbnrag/pppppbnppppp/12/12/12/12/12/12/12/12/PPPPPBNPPPPP/TCRQHkpBNRAG w - - 0 1"
    moves = "j2j3c11c10i2i4d11d10l1j2j11j10k1i2i11i9c2c3a12c11a1c2c11c8c3c5b12c10i1h4k12i10g2f4l12j11h1f3j11h10e2e3g11f9f4l11j10j9h4j10h11i10f2i9h10j11d1i10d10d9i10j9h12i11i9f2d12d11j2h3e11e9f4g2f9h10j9j4f1e2g2h4j11h12j4i3c10c2c1c2e2d3c2c1d9d4e3d4e9d4h4f3d3e4h3i9h10j11i3g3j11i9g3i9i11j10i9j4e4f3f2j10j12j10j4i9f3e4i1h3e4e9i9h4j10h10h4i9h10h3i2h3d11h3g12f11c11d11d11f11e12d11f1e11h3e10"
}

let create_piece = (code_piece, id, _x, _y) => {
    //console.log( code_piece, id, _x, _y)
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
    piece.id = 'start_'+id
    div.id = 'block_'+id
    div.appendChild(piece)
    div.draggable = true
    set_piece_position(div, _x, _y)
}

let set_piece_position = (piece, _x, _y, old_x, old_y, time_animation=0,) => {
    //console.log(_x, _y, old_x, old_y, piece)

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
        let position = {}
        position['x']=0
        let i = 0
        for (; position.x < 12; i++) {
            if (value[i] && (Number.isNaN(parseInt(value[i], 10)))) {
                position['y'] = key
                position = coordinate_shift(position)
                create_piece(value[i], position.view, position.shift_x, position.shift_y)
                position.x++
            } else {
                position.x = position.x + Number(value[i])
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

    if  (PGN !== 'v4'){
        position['shift_x'] = position.x + 2
        if (position_board_path(position.y)==='bottom'){
            position['shift_y']=position.y+4
            position['view']=String.fromCharCode(95 + position.shift_x) + (12 - position.shift_y)
        }else{
            position['shift_y']=position.y
            position['view']=String.fromCharCode(95 + position.shift_x) + (8 - position.shift_y)
        }
    }else {
        if (board_size !== 12) {
            position['shift_x'] = position.x + 2
            if (position_board_path(position.y) === 'bottom') {
                if (board_size === 8) {
                    position['shift_y'] = position.y + 4
                } else {
                    position['shift_y'] = position.y + 2
                }
            }
        }
        position['view']=String.fromCharCode(97 + position.shift_x) + (12 - position.shift_y)
    }

    //console.log(position)
    return position
}

chess_move=(piece, _mouse_position_dragend, _mouse_position_dragstart)=>{
    const cName = piece.querySelector(`piece`).className.split(' ')
    console.log(cName[0], cName[1], _mouse_position_dragstart.view + '-' + _mouse_position_dragend.view)
    set_piece_position(piece, _mouse_position_dragend.shift_x, _mouse_position_dragend.shift_y, _mouse_position_dragstart.shift_x, _mouse_position_dragstart.shift_y, 1.5)
}

let movesArray = new Array()
get_start_moves=(moves)=>{
    const regex = /([a-l])(10|11|12|[1-9])([a-l])(10|11|12|[1-9])/g;
    let arr
    while ((arr = regex.exec(moves)) !== null) {
        regex.lastIndex++
        movesArray.push([arr[1],arr[2],arr[3],arr[4]])
    }
//    console.log(movesArray)
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

let rotate = () => {
    if (!board_rotate){
        board_rotate="-"
    }else{
        board_rotate=""
    }
    switch(board_position) {
        case 0:size0(0);break
        case 1:size1(0);break
        case 2:size2(0);break
        case 3:size3(0);
    }
}

let size0 = (time=3) => {
    board_scale = 1.5
    board_size = 8
    board_position = 0
    let _style
    if  (PGN !== 'v4') {
        if (!board_rotate) {
            _style = "" +
                "div#board_path_top>coords.collum {" +
                    "flex-flow: column-reverse;" +
                    "transform: translate( 539px, -242px);" +
                "}" +
                "div#board_path_bottom>coords.collum {" +
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
        "}" +
        ".size4{" +
            "opacity: 0;" +
        "}" + _style
}

let size1 = (time) => {
    size0(time)
    board_position = 1
    board_style.innerHTML=board_style.innerHTML +
        ".size0{" +
            "opacity: 0;" +
        "}"
}

let size2 = (time) => {
    board_scale = 1.2
    board_size = 10
    board_position = 2
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
        "}" +
        ".size0, .size4{" +
            "opacity: 0;" +
        "}" + _style
}

let size3 = (time) => {
    board_scale = 1
    board_size = 12
    board_position = 3
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
        "}" +
        ".size0{" +
            "opacity: 0;" +
        "}" + _style
}


if  (PGN === 'v4') {
    size3(0)
    generate_start_position()
    setTimeout(size0, 3000);

}else{
    if  (PGN ==='v3'||PGN ==='960'||PGN ==='classic')
        size1(0)
    else
        size0(0)
    generate_start_position()
}

get_start_moves(moves)

let new_board_position=board_position

const fibonacci = (move) =>{
    fib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025]
    if (move%2) {
        move = move / 2 + 1.5
        let f = 0
        while (fib[f] <= move ){
            f++
        }
        switch (f%6) {
            case 1: if (board_position != 0) size0(1); break
            case 2:
            case 0: if (board_position != 1) size1(1); break
            case 3:
            case 5: if (board_position != 2) size2(1); break
            case 4: if (board_position != 3) size3(1)
        }
    }
}

const moves_list = document.querySelector(`#moves_list`)
const next_move=(_move)=>{
    if  (PGN === 'v4')
        fibonacci(_move)
    if (movesArray[_move]) {
        let div2 = document.createElement('div')
        div2.innerHTML = movesArray[_move][0] + movesArray[_move][1] + '-' + movesArray[_move][2] + movesArray[_move][3]
        if (_move%2) {
            const div = document.querySelector(`#moves_list>div:last-child`)
            div.appendChild(div2)
        }else{
            let div = document.createElement('div')
            let div3 = document.createElement('div')
            div3.innerHTML = (_move/2+1)+'. '
            div.appendChild(div3)
            div.appendChild(div2)
            moves_list.appendChild(div)
        }
    }
}

let _move = 0
let detour_moves = () =>{
    next_move(_move)
    setTimeout("detour_moves()",2000)
    _move++
    }

setTimeout("detour_moves()",8000)

console.log(movesArray)

//setTimeout(set_piece_position(piece, _x, _y, old_x, old_y, 2,),5000)




//const move_string_position=(arr)=>{
    //const piece = document.querySelector(`#block_d2`)

//}
