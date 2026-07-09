import AsideSidebarCart from '@/components/aside-sidebar-cart'
import AsideSidebarNavigation from '@/components/aside-sidebar-navigation'
import EzkoFooter from '@/components/ezokhetho/ezokhetho-footer'
import EzkoHeader from '@/components/ezokhetho/ezokhetho-header'
import React, { ReactNode } from 'react'
interface ComponentProps {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

const ApplicationLayout: React.FC<ComponentProps> = ({ children, header, footer }) => {
  return (
    <div>
      {/* HEADER */}
      {header ? header : <EzkoHeader />}

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER */}
      {footer ? footer : <EzkoFooter />}

      {/* ASIDES */}
      <AsideSidebarNavigation />
      <AsideSidebarCart />
    </div>
  )
}

export { ApplicationLayout }
