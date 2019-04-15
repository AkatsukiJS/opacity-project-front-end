/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Label } from '../../index'

type Link = {
  label: string,
  href: string
}

type Props = {
  /** List of nav links */
  links: Link[],
  /** isOpen flag */
  isOpen: boolean,
  /** imageFooter path */
  imageFooter?: string,
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  font-family: ${theme.fontFamily.Ropa};
  color: ${theme.color.Black};
  background-color: ${theme.color.White};
  position: absolute;
  height: 100vh;
  right: 0;
  top: 0;
  padding: 1rem 2rem;
  box-sizing: border-box;
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  z-index: 10;

  .op__sidemenu-header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }

  .op__sidemenu-content {
    ul {
      padding: 0;
      list-style: none;

      a {
        text-decoration: none;

        .op__sidemenu-label {
          display: block;

          :hover {
            color: ${theme.color.Crimson};
          }
        }
      }

      li {
        margin: 1rem 0;

        :first-of-type {
          margin-top: 0;
        }

        :last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  .op__sidemenu-footer {
    width: 100%;
    text-align: center;
    img {
      max-width: 160px;
    }
  }

  .op__sidemenu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
`

const StyledSideMenu = styled.nav`
  ${style}
`

/** SideMenu component */
const SideMenu = (props: Props) => {
  const { links = [], className, isOpen, imageFooter = '' } = props

  return isOpen ? (
    <StyledSideMenu className={className}>
      <div className='op__sidemenu-header' />
      <div className='op__sidemenu-wrapper'>
        <div className='op__sidemenu-content'>
          <ul>
            {links.map(({ label, href }, key) => (
              <li key={key}>
                <a href={href}>
                  <Label className='op__sidemenu-label' size='large'>
                    {label}
                  </Label>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='op__sidemenu-footer'>
          {imageFooter.length > 0 ? (
            <div>
              <img src={imageFooter} />
            </div>
          ) : null}
        </div>
      </div>
    </StyledSideMenu>
  ) : null
}

SideMenu.defaultProps = {
  links: [],
  className: ''
}

export default SideMenu
