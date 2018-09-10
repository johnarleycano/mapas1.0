<div class="uk-offcanvas-content">
    <div id="offcanvas-nav" uk-offcanvas="overlay: false; mode: push; flip: false;">
        <div id="menu_lateral" class="uk-offcanvas-bar">
            <ul class="uk-nav uk-nav-default">
                <li class="uk-active"><a href="<?php echo site_url(''); ?>">INICIO</a></li>
                
                <!-- <li class="uk-parent">
                    <a href="#">REPORTES</a>
                    <ul class="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li> -->

                <li class="uk-nav-header">MEDICIONES</li>
                <li><a onCLick="javascript:medir_roceria()"><i class="far fa-paper-plane fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Realizar medición</a></li>
                <li><a href="<?php // echo site_url('mediciones/ver'); ?>"><i class="fas fa-list-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Ver mediciones</a></li>
                
                <li class="uk-nav-header">BÁSCULAS</li>
                <li><a href="<?php // echo site_url('basculas/pesaje'); ?>"><i class="fas fa-truck fa-lg"></i>&nbsp;&nbsp;&nbsp;Pesaje</a></li>
                
                <!-- Menús pendientes de habilitar -->
                <?php // if(ENVIRONMENT === 'development'){ ?>
                <li><a onCLick="javascript:certificados_calibracion()"><i class="fas fa-server fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Cert. calibración</a></li>
                    
                    <li class="uk-nav-header">INVENTARIO</li>
                    <li><a onCLick="javascript:medir_roceria()"><i class="far fa-paper-plane fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Agregar</a></li>
                    <li><a href="<?php // echo site_url('mediciones/ver'); ?>"><i class="fas fa-list-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Ver</a></li>

                    <li class="uk-nav-header">MANTENIMIENTO</li>
                    <li><a onCLick="javascript:medir_roceria()"><i class="far fa-paper-plane fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Iniciar</a></li>
                    <li><a href="<?php // echo site_url('mediciones/ver'); ?>"><i class="fas fa-list-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Ver</a></li>
                <?php // } ?>
                
                <!-- <li class="uk-nav-header"></li> -->
                <li class="uk-nav-divider"></li>
                <li><a href="<?php // echo site_url('reportes'); ?>"><i class="far fa-clipboard fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Reportes</a></li>
                <li><a href="<?php // echo site_url('configuracion'); ?>"><i class="fas fa-cog fa-lg"></i>&nbsp;&nbsp;&nbsp;Configuración</a></li>
                
                <li class="uk-nav-divider"></li>
                <!-- <li class="uk-nav-header"></li> -->
                <li><a href="<?php // echo site_url('sesion/cerrar'); ?>"><i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;Salir</a></li>
            </ul>
        </div>
    </div>
</div>