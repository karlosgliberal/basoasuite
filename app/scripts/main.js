$(document).ready(function() {

    // Matter aliases
    var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse;

    var Demo = {};

    var _engine,
        _mouseConstraint,
        _sceneEvents = [],
        _useInspector = window.location.hash.indexOf('-inspect') !== -1,
        _isMobile = /(ipad|iphone|ipod|android)/gi.test(navigator.userAgent);
    
    // initialise the demo

    Demo.init = function() {
        var container = document.getElementById('canvas-container');

        // some example engine options
        var options = {
            positionIterations: 0,
            velocityIterations: 0,
            enableSleeping: false
        };

        // create a Matter engine
        // NOTE: this is actually Matter.Engine.create(), see the aliases at top of this file
        _engine = Engine.create(container, options);

        // add a mouse controlled constraint
        _mouseConstraint = MouseConstraint.create(_engine);
        World.add(_engine.world, _mouseConstraint);

        // run the engine
        Engine.run(_engine);

        // default scene function name
        _sceneName = 'chains';
        
        // get the scene function name from hash
        if (window.location.hash.length !== 0) 
            _sceneName = window.location.hash.replace('#', '').replace('-inspect', '');
        // set up a scene with bodies
        Demo[_sceneName]();
    };

    // call init when the page has loaded fully

    if (window.addEventListener) {
        window.addEventListener('load', Demo.init);
    } else if (window.attachEvent) {
        window.attachEvent('load', Demo.init);
    }


    Demo.chains = function() {
      var _world = _engine.world,
      groupId = Body.nextGroupId();
      Demo.reset();
      // _world.bounds.max.x = 80;
      // _world.bounds.max.y = 80
      groupId = Body.nextGroupId( );        

      var texture = 'images/1.png';
      var ropeB = Composites.stack(60, 0, 4, 4, 60, 60, function(x, y, column, row) {
        return Bodies.rectangle(x, y, 10, 10, { groupId: groupId, frictionAir:0.009, render: { fillStyle: '#b4c9c1', strokeStyle: '#b4c9c1' } });
      });
      
      Composites.chain(ropeB, 0, 0, 0, 0, { stiffness: 0.4, length: 4});

      ropeB.bodies[15]['render']['sprite']['texture'] = texture; 

      Composite.add(ropeB, Constraint.create({ 
          bodyB: ropeB.bodies[0],
          pointB: { x: 0, y: 0 },
          pointA: { x: 85, y: 0 },
          stiffness: 0.2
        }));


      World.add(_world, ropeB);
    };

    
    Demo.reset = function() {
      var _world = _engine.world;

      World.clear(_world);
      Engine.clear(_engine);

      // clear scene graph (if defined in controller)
      var renderController = _engine.render.controller;
      if (renderController.clear)
          renderController.clear(_engine.render);

      // clear all scene events
      for (var i = 0; i < _sceneEvents.length; i++)
          Events.off(_engine, _sceneEvents[i]);

      if (_mouseConstraint.events) {
          for (i = 0; i < _sceneEvents.length; i++)
              Events.off(_mouseConstraint, _sceneEvents[i]);
      }

      _sceneEvents = [];

      // reset id pool
      Common._nextId = 0;

      // reset random seed
      Common._seed = 0;

      // reset mouse offset and scale (only required for Demo.views)
      Mouse.setScale(_mouseConstraint.mouse, { x: 1, y: 1 });
      Mouse.setOffset(_mouseConstraint.mouse, { x: 0, y: 0 });

      _engine.enableSleeping = true;
      _engine.world.gravity.y = 1;
      _engine.world.gravity.x = 0;
      _engine.timing.timeScale = 1;

      var offset = 5;
      World.add(_world, [
      ]);

      _mouseConstraint = MouseConstraint.create(_engine);
      World.add(_world, _mouseConstraint);
      
      var renderOptions = _engine.render.options;
      renderOptions.wireframes = false;
      renderOptions.hasBounds = false;
      renderOptions.showDebug = false;
      renderOptions.showBroadphase = false;
      renderOptions.showBounds = false;
      renderOptions.showVelocity = false;
      renderOptions.showCollisions = false;
      renderOptions.showAxes = false;
      renderOptions.showPositions = false;
      renderOptions.showAngleIndicator = false;
      renderOptions.showIds = false;
      renderOptions.showShadows = false;
      renderOptions.background = '#b4c9c1';

      if (_isMobile)
          renderOptions.showDebug = true;
    };

  var left = '80%';
  if ($(this).width() >= 1280) {
    left = left;
  }
  else if ($(this).width() < 1280 && $(this).width()>= 980) {
    left = '70%';
  }

  //Sistema de Carrusel
  $('#belea-carrusel, #beigorri-carrusel, #okolin-carrusel, #bedats-carrusel, #recepcion-carrusel').carousel({interval:false});
  $('.controles a').click(function(e){
    var id = e.target.id;
    var arrayIdGeneral = id.split("-");
    var idIzquierda = '#'+arrayIdGeneral[0]+'-izquierda';
    $(idIzquierda).show();
  });

  //Sistema de onepage de portada con el modulo Fullpaje.js
  $('.home').fullpage({
    anchors: ['inicio', 'te-proponemos', 'te-ofrecemos', 'el-bosque', 'donde-estamos', 'nosotros', 'compromisos'],
    resize: false,
    slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    // css3: true ,
    slidesNavigation: true,
    afterLoad: function(anchorLink, index){
     if(anchorLink == '3rdPage'){
          console.log('hola afterLoad');
     }
    },
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      if(anchorLink == '3rdPage'){
      }
    }   
  });

  //Sistema para el footer lateral
  //Ir a casas
  $('#boton-casas').click(function(e){
    $('.home-casas').transition({ left: 0 }, 800, 'ease');
    $('#boton-casas').transition({opacity:0}, 800, 'ease');
    $('#home').transition({opacity:0}, 2000, 'ease');
    setTimeout(function() {
      $('#boton-volver').transition({opacity:1}, 'ease');
      $('#boton-volver').removeClass('boton-opacity');
      $('#boton-casas').addClass('boton-opacity');
    }, 900);
    Demo['chains']();
  });

  //Volver a casas
  $('#boton-volver').click(function(e){
    $('#home').transition({opacity:1});
    $('.home-casas').transition({ left: left }, 800, 'ease');
    $('#boton-volver').transition({opacity:0}, 800, 'ease');
    setTimeout(function() {
      $('#boton-casas').transition({opacity:1}, 'ease');
      $('#boton-casas').removeClass('boton-opacity');
      $('#boton-volver').addClass('boton-opacity');
    }, 900);
    Demo['chains']();
  });

  //Acceso a las casas mediante el menú
  $('.casas').click(function(e){
    e.preventDefault();
    $('.carrusel-off').each(function(index){
     $(this).transition({opacity:0, dalay:50});
     $(this).removeClass('active');
    });
    $('#'+e.target.id+'-carrusel-wrapper').transition({opacity:1, delay:50});
    $('#'+e.target.id+'-carrusel-wrapper').addClass('active');
  });



});


