var diakepek=0, aktualiskep=0; var diakep=new Array( ) ;
function DiakepBemutato( )  
{ imgs=document .getElementsByTagName ("img") ;
   for (i=0 ; i<imgs.length; i++) 
      { if ( imgs [ i ] .className  != "diakep") continue ;
        diakep [diakepek]=imgs [ i ];
       if (diakepek==0) { imgs [ i ].style,display="block" ; } 
       else { imgs [ i ].style.display="none" ; }

         imgs [ i ].onclick=KovetkezoDiakep ; diakepek++ ;
      } 
}  

function KovetkezoDiakep ( )   
 { diakep [aktualiskep].style.display="none"; aktualiskep++ ; 
   if (aktualiskep >= diakepek) aktualiskep=0; 
   diakep [aktualiskep] .style.display="block" ; }

window.onload=DiakepBemutato ;