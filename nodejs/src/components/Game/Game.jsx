import React from 'react'
import classes from './Game.css'

export const Game = () => {

  const coords = `coords`;
  const mask = `mask`;
  const coord = `coord`;

  return (
    <>
      <style id="board_style">

      </style>
      <div style={{
        position: 'absolute',
        margin: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '1000px',
        height: '720px',
        display: 'flex'
      }}>
        <div id="container" style={{overflow: 'hidden', width: '720px', height: '720px'}}>
          <div id="board_rotate">
            <div id="board" style={{cursor: 'pointer'}}>
              <div style={{height: '50%'}}>
                <div id="board_path_top">
                  <div className="coords collum">
                    <div className="coord a">5</div>
                    <div className="coord b">6</div>
                    <div className="coord a">7</div>
                    <div className="coord b">8</div>
                    <div className="coord a">9</div>
                    <div className="coord b">10</div>
                    <div className="coord a">11</div>
                    <div className="coord b">12</div>
                  </div>
                  <div className="coords row">
                    <div className="coord b">a</div>
                    <div className="coord a">b</div>
                    <div className="coord b">c</div>
                    <div className="coord a">d</div>
                    <div className="coord b">e</div>
                    <div className="coord a">f</div>
                    <div className="coord b">g</div>
                    <div className="coord a">h</div>
                    <div className="coord b">i</div>
                    <div className="coord a">j</div>
                    <div className="coord b">k</div>
                    <div className="coord a">l</div>
                  </div>
                  <div className="size0">
                    <div className="piece_rotate" style={{transform: 'translate(300px, 180px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(360px, 180px)'}}>
                      <div className="mask"/>
                    </div>
                  </div>
                  <div className="size4">
                    <div className="piece_rotate" style={{transform: 'translate(180px, 240px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(120px, 180px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(60px, 120px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(480px, 240px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(540px, 180px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(600px, 120px)'}}>
                      <div className="mask"/>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{overflow: 'hidden', height: '50%'}}>
                <div id="board_path_bottom">
                  <div className="coords collum">
                    <div className="coord a">1</div>
                    <div className="coord b">2</div>
                    <div className="coord a">3</div>
                    <div className="coord b">4</div>
                    <div className="coord a">5</div>
                    <div className="coord b">6</div>
                  </div>
                  <div className="coords row">
                    <div className="coord b">a</div>
                    <div className="coord a">b</div>
                    <div className="coord b">c</div>
                    <div className="coord a">d</div>
                    <div className="coord b">e</div>
                    <div className="coord a">f</div>
                    <div className="coord b">g</div>
                    <div className="coord a">h</div>
                    <div className="coord b">i</div>
                    <div className="coord a">j</div>
                    <div className="coord b">k</div>
                    <div className="coord a">l</div>
                  </div>
                  <div className="size0">
                    <div className="piece_rotate" style={{transform: 'translate(300px, 120px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(360px, 120px)'}}>
                      <div className="mask"/>
                    </div>
                  </div>
                  <div className="size4">
                    <div className="piece_rotate" style={{transform: 'translate(180px, 60px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(120px, 120px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(60px, 180px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(480px, 60px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(540px, 120px)'}}>
                      <div className="mask"/>
                    </div>
                    <div className="piece_rotate" style={{transform: 'translate(600px, 180px)'}}>
                      <div className="mask"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{margin: '0 0 0 30px'}}>
          <div style={{height: '695px', border: '#0a0ae3 1px solid', overflowY: 'scroll'}} id="block_moves_list">
            <div id="moves_list">
            </div>
          </div>
          <div style={{height: '20px', border: '#0a0ae3 1px solid', display: 'flex', flexDirection: 'column'}}>
            {/*<button onClick="size0(1)">Размер 8x8 (без центра)</button>*/}
            {/*<button onClick="size1(1)">Размер 8x8</button>*/}
            {/*<button onClick="size2(1)">Размер 10x10</button>*/}
            {/*<button onClick="size3(1)">Размер 12x12</button>*/}
            {/*<button onClick="detour_moves()">Сделать ход</button>*/}
            {/*<button onClick="rotate()">Перевернуть доску</button>*/}
          </div>
        </div>
      </div>
    </>
  )
}