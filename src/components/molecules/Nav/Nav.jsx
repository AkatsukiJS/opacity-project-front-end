/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Label } from '../../index'

type Link = {
  label: string,
  href: string,
  iconSrc?: string
}

type Props = {
  /** List of nav links */
  links: Link[],
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  font-family: ${theme.fontFamily.Ropa};
  color: ${theme.color.Black};
  display: inline-block;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li a span {
      font-size: 1rem;
    }

    li {
      padding: 0 1.25rem;
      margin: 0;
      display: inline-block;
      line-height: 1rem;
    }

    li:first-of-type {
      padding-left: 0;
    }

    li:last-of-type {
      padding-right: 0;
    }

    li a {
      text-decoration: none;
      line-height: 1rem;
    }

    li a img {
      display: inline-block;
      height: 1rem;
      width: auto;
      margin-right: 0.3rem;
    }

    li:hover span {
      color: ${theme.color.Crimson};
    }
  }
`

const StyledNav = styled.nav`
  ${style}
`

/** Nav component */
const Nav = (props: Props) => {
  const { links = [], className } = props

  return (
    <StyledNav className={className}>
      <ul>
        {links.map(({ label, href, iconSrc = '' }, key) => (
          <li key={key}>
            <a href={href}>
              {iconSrc.length > 0 && <img src={iconSrc} />}
              <Label>{label}</Label>
            </a>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

Nav.defaultProps = {
  links: [],
  className: ''
}

export default Nav
