const get = (function() {
        let a = window.location.search, b = {}
        a = a.substring(1).split("&")
        for (let i = 0; i < a.length; i++){let c=a[i].split("=")
            b[c[0]]=c[1]
        }
        return b
})()

let PGN, board_scale, board_size
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

const board = document.querySelector(`#board`)
const board_path_top = document.querySelector(`#board_path_top`)
const board_path_bottom = document.querySelector(`#board_path_bottom`)

let create_piece = (_x, _y, code_piece) => {
    //console.log(_x, _y, code_piece)
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
    piece.draggable = true

    if (_y <= 5){
        piece.setAttribute( "style", "transform: translate("+ _x * 60 +"px, " + _y * 60 + "px)" )
        board_path_top.appendChild(piece)
    }else{
        piece.setAttribute( "style", "transform: translate("+ _x * 60 +"px, " + (_y-6) * 60 + "px)" )
        board_path_bottom.appendChild(piece)
    }
}

let generate_start_position = () => {
    let line = FEN.split(" ")[0].split("/")
    line.forEach((value, key) => {
        let parallax_X = 0, parallax_Y = 0, i = 0, x = 0, y = 0
        if (PGN !== 'v4') {
            parallax_X = 2
            parallax_Y = 4
        }
        for(;x<12;i++){
            if (value[i] && (Number.isNaN(parseInt(value[i], 10)))) {
                if (key > 3 && PGN !== 'v4') {
                    y = 4
                }
                create_piece(x + parallax_X, key + y, value[i])
                x++
            } else {
                x = x + Number(value[i])
            }
        }
    })
}

let mouse_positon_dragstart = {}
let mouse_positon_dragover = {}
let mouse_positon_old_dragover = {}
let mouse_positon_dragend = {}
let piese_move
let board_positon_top

let mouse_position = (evt) => {
    let mouse_pos = {}
    mouse_pos['x'] = (Math.ceil(evt.layerX/(60*board_scale)))
    mouse_pos['y'] = Math.ceil(board_size-(evt.y-board_positon_top)/(60*board_scale))
    return mouse_pos
}

let mouse_position_board_path = (mouse_pos_y) => {
    if (board_size/2<mouse_pos_y){
        return 'top'
    }else{
        return 'bottom'
    }
}

board.addEventListener(`dragstart`, (evt) => {
    board_positon_top = board.getBoundingClientRect().top
    mouse_positon_dragstart = mouse_position(evt)
    mouse_positon_dragstart.board_path = mouse_position_board_path(mouse_positon_dragstart['y'])
    piese_move = evt.target
    //console.log('mousepush', mouse_positon_dragstart)
})


board.addEventListener(`dragover`, (evt) => {
    mouse_positon_dragover = mouse_position(evt)
    if (mouse_positon_old_dragover.x !== mouse_positon_dragover.x || mouse_positon_old_dragover.y !== mouse_positon_dragover.y){
        mouse_positon_old_dragover = mouse_positon_dragover
        //console.log('mouseover', mouse_positon_dragover)
    }
    //console.log('mousemove', evt.layerX, evt.layerY,)
})


board.addEventListener(`dragend`, (evt) => {
    mouse_positon_dragend = mouse_position(evt)
    mouse_positon_dragend.board_path = mouse_position_board_path(mouse_positon_dragend['y'])

    //piese_move.setAttribute( "style", "transform: translate("+ x * 60 +"px, " + (12-mouse_positon_dragend.y) * 60 + "px)" )

    evt.target.classList.remove(`dragover`)

    console.log('mousemove', mouse_positon_dragstart, '->', mouse_positon_dragend)
})


let size0 = (time) => {
    board_scale = 1.5
    board_size = 8
    board.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "height: 480px; width: 480px;" +
        "transform: translate( 120px,  120px) scale(" + board_scale + ")"
    )

    board_path_top.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "transform: translate( -120px, 0px)"
    )

    board_path_bottom.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "transform: translate( -120px, -120px)"
    )

}

let size1 = (time) => {
    size0(time)
}

let size2 = (time) => {
    board_scale = 1.2
    board_size = 10
    board.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "height: 600px; width: 600px;" +
        "transform: translate( 60px, 60px) scale(" + board_scale + ")"
    )

    board_path_top.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "transform: translate( -120px, 0px)"
    )

    board_path_bottom.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "transform: translate( -120px, -60px)"
    )

}

let size3 = (time) => {
    board_scale = 1
    board_size = 12
    board.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "height: 720px;width: 720px;" +
        "transform: scale(" + board_scale + ")"
    )

    board_path_top.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "transform: translate( 0px, 0px)"
    )

    board_path_bottom.setAttribute( "style", "" +
        "transition: " + time + "s;" +
        "transform: translate( 0px, 0px)"
    )
}

size0(0)
generate_start_position()
