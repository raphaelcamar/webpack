import msg from './msg'

console.log(_.difference([1,2,3], [4, 5]))

if(module.hot) {
  module.hot.accept('./msg.js', function(){
    console.log('Módulo de mensagem atualizou')
    msg();
  })
}

function createButton(){
  const btn = document.createElement('button')
  btn.innerText = 'Clica aqui'

  document.querySelector('body').appendChild(btn)

  btn.onclick = e => import('./lazy').then(module => {
    const lazy = module.default

    lazy()
  })
}

createButton()