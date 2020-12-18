import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Students',
        to: '/students',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Student',
        to: '/add-student',
        icon: 'cil-user-follow',
      }
      ]
  }
]

export default _nav
