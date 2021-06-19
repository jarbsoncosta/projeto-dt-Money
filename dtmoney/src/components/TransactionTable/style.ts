import styled from 'styled-components'


export const Container = styled.div`


margin-top:4rem;

table{
    width:100%;
    border-spacing: 0.0.5rem;
}

th{
    color: var(--text-body);
    font-weight:400;
    padding: 1rem 2rem;
    text-align: left;
    line-height:1.5rem;
    
}

td{
    padding: 1rem 2rem;
    border:0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;
    
    //se for o primeiro seguir o layout
  &:first-child{
      color: var(--text-title)

  }
  &.deposit{
      color: var(--green);
  }
  &.withdraw{
      color:var(--red)
  }
    
}
button.delete[type="submit"]{
    color:#E52E4D;
    background: #ffff;
    border: 0;
    margin-left: 1rem
    
}
button.edit[type="submit"]{
    color:#000080;
    background: #ffff;
    border: 0;
    margin-left: 1rem
    
}
svg{
    width:16px;
    height:16px;
}


`