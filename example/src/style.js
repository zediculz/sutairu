
let nn = {
   $b: '1px solid #222',
   $bs: '1px 2px 0px #222', 
   $br: '8px'
}


export const block = {
   $w: '80%',
   $h: '200px',
   $justify: 'space-evenly',
   $ip: { $w: '100%',}, 
   $mb: {$dir: 'column', $h: '600px', $w: '100%'}, 
   $sm: {$dir: 'column', $h: '560px', $w: '100%'}
}


export const box = {
   $w: "25%", 
   $h: "80%",
   $dir: "column", 
   $mb: {$w: '80%', $h: '28%'}, 
   $sm: {$w: '80%', $h: '27%'},
   ...nn
}
