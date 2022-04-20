import "./Header.css";
import { headerGenerators, headerStrategies } from "../data/header-data";

import Dropdown from "./Dropdown";
import { AbstractStrategy } from "../strategies";
import { AbstractGenerator } from "../generators";

interface HeaderProps {
  onStrategyClick: (strategy: AbstractStrategy) => void;
  onGeneratorClick: (generator: AbstractGenerator) => void;
  strategy: AbstractStrategy;
  generator: AbstractGenerator;
}

const Header = ({
  onStrategyClick,
  onGeneratorClick,
  strategy,
  generator,
}: HeaderProps) => {
  return (
    <header className="header">
      <Dropdown
        dropdownActive={strategy}
        dropdownItems={headerStrategies}
        onItemClick={onStrategyClick}
        activeColor="#314455"
      />
      <Dropdown
        dropdownActive={generator}
        dropdownItems={headerGenerators}
        onItemClick={onGeneratorClick}
        activeColor="#644e5b"
      />
    </header>
  );
};

export default Header;
