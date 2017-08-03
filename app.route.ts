import { Routes } from '@angular/router'
import { ShowImageComponent } from './src/app/show-image/show-image.component'

export const routes:Routes =[
    {path: 'image/:name', component:ShowImageComponent}
]