
let nn = {
   $b: '1px solid #222',
   $bs: '1px 2px 0px #222', 
   $br: '8px'
}


      
export const block = {
   $w: '100%',
   $h: '200px',
   $justify: 'space-evenly',
   $ip: {$bg: 'green'}, 
   $mb: {$dir: 'column', $h: '500px'}, 
   $sm: {$dir: 'column', $h: '500px'}
}

export const b = {
   $w: "24%", 
   $h: "80%",
   $dir: "column",
   $mb: {$w: '80%', $h: '30%'}, 
   $ip: {$w: '28%'}, 
   $sm: {$w: '80%', $h: '30%'},
   ...nn
}
