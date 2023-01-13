import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">My Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" href="/">
            Home
            </Link>
            
          </li>
    
          <li class="nav-item">
            <Link class="nav-link" href="/about">
            About
            </Link>
           
          </li>
          <li class="nav-item">
        
            <Link class="nav-link" href="/contact">
            Contact
            </Link>
         
          </li>
          <li class="nav-item">
          <Link class="nav-link" href="/login">
          Login
            </Link>
           
          </li>
          <li class="nav-item">
          <Link class="nav-link" href="/signup">
          Sign Up
            </Link>

          
          
          </li>
          <li class="nav-item">
          <button onClick={() => signIn()}>Sign in</button>
            </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Header
