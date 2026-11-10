(function(){
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  if(btn){btn.addEventListener('click',function(){var a=menu.classList.toggle('aberto');btn.setAttribute('aria-expanded',a);document.body.style.overflow=a?'hidden':'';});}
  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visivel');io.unobserve(e.target);}});},{threshold:.08}):null;
  document.querySelectorAll('.revelar').forEach(function(el){io?io.observe(el):el.classList.add('visivel');});
  // filtro e busca de artigos
  var lista=document.getElementById('lista-artigos');
  if(lista){
    var cards=[].slice.call(lista.querySelectorAll('.card-art')),cat='',q='',vazio=document.getElementById('vazio');
    var aplicar=function(){var n=0;cards.forEach(function(c){var ok=(!cat||c.dataset.cat===cat)&&(!q||c.dataset.txt.indexOf(q)>-1);c.style.display=ok?'':'none';if(ok){n++;c.classList.add('visivel');}});vazio.style.display=n?'none':'block';};
    document.getElementById('filtros').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call(this.children,function(x){x.classList.remove('ativo')});b.classList.add('ativo');cat=b.dataset.cat;aplicar();});
    var inp=document.getElementById('busca-artigos');inp.addEventListener('input',function(){q=inp.value.trim().toLowerCase();aplicar();});
    var p=new URLSearchParams(location.search).get('area');if(p){var b=document.querySelector('#filtros [data-cat="'+p+'"]');if(b)b.click();}
  }
  // copiar link
  document.querySelectorAll('[data-copiar]').forEach(function(b){b.addEventListener('click',function(){try{navigator.clipboard.writeText(b.dataset.copiar);b.lastChild.textContent=' Link copiado';}catch(e){}});});
  // formulário -> WhatsApp
  var f=document.getElementById('form-contato');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);var t='Olá! Meu nome é '+d.get('nome')+(d.get('cidade')?', de '+d.get('cidade'):'')+'.\nAssunto: '+d.get('assunto')+'\n\n'+d.get('mensagem');window.open('https://wa.me/'+window.WHATS+'?text='+encodeURIComponent(t),'_blank','noopener');});}
})();
