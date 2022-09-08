import { Icon, Flex } from '@aws-amplify/ui-react';
import { useState } from 'react';
import styles from '../GlobalNav.module.scss';

export function ExternalLink({ children }: { children: any }) {
  const [isHovered, setIsHovered] = useState(false);

  const externalIcon = (
    <Icon
      className={styles['external-icon']}
      ariaLabel="External link icon"
      width="18"
      height="18"
      viewBox={{ width: 18, height: 18 }}
      paths={[
        {
          d: 'M9.79505 1.59277L16.3138 1.59278M16.3138 1.59278L16.3138 8.11155M16.3138 1.59278L9.79504 8.11156',
          stroke: '#545B64',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        },
        {
          d: 'M17.0834 12.3333C17.0834 11.9191 16.7476 11.5833 16.3334 11.5833C15.9192 11.5833 15.5834 11.9191 15.5834 12.3333H17.0834ZM5.66675 2.41663C6.08096 2.41663 6.41675 2.08084 6.41675 1.66663C6.41675 1.25241 6.08096 0.916626 5.66675 0.916626V2.41663ZM15.5834 12.3333V13.6666H17.0834V12.3333H15.5834ZM13.6667 15.5833H4.33341V17.0833H13.6667V15.5833ZM4.33341 15.5833C3.27487 15.5833 2.41675 14.7252 2.41675 13.6666H0.916748C0.916748 15.5536 2.44644 17.0833 4.33341 17.0833V15.5833ZM15.5834 13.6666C15.5834 14.7252 14.7253 15.5833 13.6667 15.5833V17.0833C15.5537 17.0833 17.0834 15.5536 17.0834 13.6666H15.5834ZM4.33341 2.41663H5.66675V0.916626H4.33341V2.41663ZM2.41675 4.33329C2.41675 3.27475 3.27487 2.41663 4.33341 2.41663V0.916626C2.44644 0.916626 0.916748 2.44632 0.916748 4.33329H2.41675ZM2.41675 13.6666V4.33329H0.916748V13.6666H2.41675Z',
        },
      ]}
      fr={undefined}
    />
  );

  return (
    <Flex
      alignItems="center"
      columnGap="10.67px"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {children}
      {externalIcon}
    </Flex>
  );
}
