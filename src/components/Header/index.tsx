import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImage from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransacrionModal";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt=" image: 2 triangles dark and light green overlapping + name DT Money" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}